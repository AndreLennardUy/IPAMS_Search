from txtai.embeddings import Embeddings
from .models import RecordModel

def search_articles(query, num_results):
    embeddings = Embeddings({
        "path": "sentence-transformers/all-MiniLM-L6-v2"
    })

    # Fetch IDs and abstracts from the RecordModel table in the database
    data = list(RecordModel.objects.values_list('id', 'abstract'))
    txtai_data = [(idx, text[1], None) for idx, text in enumerate(data)]

    embeddings.index(txtai_data)

    results = embeddings.search(query, num_results)

    # Fetch and return the complete record for each result
    record_ids = [data[result[0]][0] for result in results]
    records = RecordModel.objects.filter(id__in=record_ids)

    return records