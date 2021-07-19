from django.urls import path, include
from insta import views

urlpatterns = [
    path('', views.index),
    path('api-auth/', include('rest_framework.urls')),
    path('posts/', views.PostView.as_view(), name="posts"),
    path('user/<str:pk>', views.UserView.as_view(), name="user")
]
