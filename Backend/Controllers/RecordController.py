from flask import Flask, jsonify, request
from txtai.embeddings import Embeddings
from RecordModel import RecordModel
from RecordView import display_results, get_search_query

embeddings = Embeddings({
    "path": "sentence-transformers/all-MiniLM-L6-v2"
})

app = Flask(__name__)


def get_records_from_model():
    # Here, you should implement the logic to fetch records from your data source
    # and convert them into RecordModel instances
    # For demonstration purposes, let's assume we have a hardcoded list of records
    data = [
        {
            "id": 1,
            "title": "Study 1",
            "abstract": "Abstract of Study 1",
            "author": "Author 1",
            "field": "Field 1"
        },
        {
            "id": 2,
            "title": "Study 2",
            "abstract": "Abstract of Study 2",
            "author": "Author 2",
            "field": "Field 2"
        },
        {
            "id": 3,
            "title": "Study 3",
            "abstract": "Abstract of Study 3",
            "author": "Author 3",
            "field": "Field 3"
        }
    ]

    records = []
    for item in data:
        record = RecordModel(
            item["id"],
            item["title"],
            item["abstract"],
            item["author"],
            item["field"]
        )
        records.append(record)

    return records

@app.route('/search', methods=['POST'])
def search_records():
    query = request.json['query']
    num_results = request.json.get('num_results', 5)

    # Retrieve records from the model
    records = get_records_from_model()

    # Perform search using embeddings
    txtai_data = []
    for i, record in enumerate(records):
        txtai_data.append((i, record.abstract, None))

    embeddings.index(txtai_data)
    res = embeddings.search(query, num_results)

    # Process and return search results
    results = []
    for r in res:
        record = records[r[0]]
        result = {
            "id": record.id,
            "title": record.title,
            "abstract": record.abstract,
            "author": record.author,
            "field": record.field,
            "similarity": r[1]
        }
        results.append(result)

    return jsonify(results)

# Define the route to retrieve all records
@app.route('/records', methods=['GET'])
def get_all_records():
    records = get_records_from_model()

    results = []
    for record in records:
        result = {
            "id": record.id,
            "title": record.title,
            "abstract": record.abstract,
            "author": record.author,
            "field": record.field
        }
        results.append(result)

    return jsonify(results)


def run_search():
    query = get_search_query()
    results = search_records(query)
    display_results(results)


if __name__ == '__main__':
    app.run()