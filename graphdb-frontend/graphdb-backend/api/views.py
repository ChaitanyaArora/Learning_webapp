from rest_framework.views import APIView
from rest_framework.response import Response
import requests

class NamespaceCreateView(APIView):
    def post(self, request):
        namespace = request.data.get('namespace')
        url = "http://localhost:9999/blazegraph/namespace"
        headers = {'Content-Type': 'application/xml'}
        data = f"""
        <sparql xmlns="http://www.bigdata.com/rdf/sparql.xmlns">
            <namespace>{namespace}</namespace>
        </sparql>
        """
        response = requests.post(url, headers=headers, data=data)
        return Response({'status': response.status_code})