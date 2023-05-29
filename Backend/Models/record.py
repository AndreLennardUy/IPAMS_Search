    def __init__(self, title, abstract, record_id):
        self.title = title
        self.abstract = abstract
        self.id = record_id

    def __repr__(self):
        return f"Record(title='{self.title}', abstract='{self.abstract}', id='{self.id}')"