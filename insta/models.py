from django.db import models
from django.contrib.auth.models import User
# from time import time




class Post(models.Model):
    # post_id = models.IntegerField(primary_key=True, default=int(time()))
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    image = models.URLField()
    likes = models.IntegerField()
    description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)

   


class Comment(models.Model):
    post = models.ForeignKey(Post ,on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField()

    def __str__(self):
        return "{} => {}".format(self.post, self.user)



class AddUser(models.Model):
    name = models.CharField(max_length=100)