def display_results(results):
    for result in results:
        print(f"Title: {result['title']}")
        print(f"Abstract: {result['abstract']}")
        print(f"Author: {result['author']}")
        print(f"Field: {result['field']}")
        print("------")

def get_search_query():
    return input("Enter your search query: ")
