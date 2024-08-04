from django.db import models # type: ignore
import datetime
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    title=models.CharField( max_length=50)
    body=models.TextField()
    slug=models.SlugField()
    date=models.DateTimeField(auto_now_add=True)
    banner=models.ImageField(default='fallback.png',blank=True)
    author=models.ForeignKey(User,on_delete=models.CASCADE,default=None)
 
    def __str__(self) -> str:
        return self.title