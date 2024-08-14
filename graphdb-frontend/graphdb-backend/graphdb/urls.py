from django.urls import path
from api.views import NamespaceCreateView

urlpatterns = [
    path('api/create-namespace/', NamespaceCreateView.as_view(), name='create-namespace'),
]
