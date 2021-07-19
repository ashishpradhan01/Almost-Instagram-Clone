from django.db.models import fields
from rest_framework import serializers
from .models import Post, Comment


class PostSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()
    class Meta:
        model = Post
        fields = (
            # 'post_id',
            'user',
            'image',
            'likes',
            'description',
            'date',
            'comments'
        )
    def get_comments(self, obj):
        comment = CommentSerializer(obj.comments.all(), many=True).data
        return comment  

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'post',
            'user',
            'comment'
        )