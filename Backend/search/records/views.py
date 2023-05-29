from rest_framework.views import APIView
from rest_framework.response import Response
from txtai.embeddings import Embeddings
from .models import RecordModel
from .serializers import RecordModelSerializer


def index_data():
    embeddings = Embeddings({"path": "sentence-transformers/all-MiniLM-L6-v2"})

    records = RecordModel.objects.all()
    data = [(record.id, record.abstract, None) for record in records]

    embeddings.index(data)
    embeddings.save('indexed_embeddings')  # Save the indexed embeddings to a file


def search_articles(query, num_results):
    embeddings = Embeddings({"path": "sentence-transformers/all-MiniLM-L6-v2"})
    embeddings.load('indexed_embeddings')  # Load the indexed embeddings from a file

    results = embeddings.search(query, num_results)
    record_ids = [result[0] for result in results]

    return RecordModel.objects.filter(id__in=record_ids)


class TxtaiSearchView(APIView):
    def get(self, request, format=None):
        query = request.query_params.get('query', None)
        num_results = request.query_params.get('num_results', None)
        if query is not None and num_results is not None:
            try:
                num_results = int(num_results)  # Make sure num_results is an integer
            except ValueError:
                return Response({"error": "Invalid number of results"}, status=400)

            records = search_articles(query, num_results)
            serializer = RecordModelSerializer(records, many=True)
            return Response(serializer.data)
        else:
            return Response({"error": "Query and/or number of results not provided"}, status=400)