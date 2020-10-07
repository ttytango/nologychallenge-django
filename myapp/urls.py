from django.urls import path
from myapp.views import index, PostList, post_detail, contactView, successView

urlpatterns = [
    path('', index, name='index'),
    path('contact/', contactView, name='contact'),
    path('success/', successView, name='success'),
    path('blog/', PostList.as_view(), name='blog-home'),
    path('blog/<slug:slug>/', post_detail, name='post_detail'),
]
