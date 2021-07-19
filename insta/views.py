from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User

from .serializers import PostSerializer
from .models import Post


def index(request):
    return render(request, 'index.html')

#Rest FrameWork
class PostView(APIView):
    def get(self, request, *args, **kwargs):
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = PostSerializer(data = request.data)
        if serializer.is_vaild():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class UserView(APIView):
    def get(self, request, pk, *args, **kwargs):
        user = User.objects.get(id=pk)
        return Response({
            "username" : user.username
        })