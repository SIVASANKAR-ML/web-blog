import wave
from django.shortcuts import redirect, render
from .models import Post
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from . import forms

# Create your views here.
def posts_list(request):
    posts=Post.objects.all().order_by('-date') 
    return render(request, 'posts/posts_list.html',{'posts':posts})

def post_page(request, slug):
    post=Post.objects.get(slug=slug)
    return render(request, 'posts/post_page.html',{'post':post})
@login_required(login_url="/users/login/")
def posts_new(request):
    # adding form to view 
    # adding 'FILES' request because we are adding immage
    if request.method=='POST':
        form=forms.Createpost(request.POST,request.FILES)
        if form.is_valid():
            #save with user
            newpost=form.save(commit=False)
            newpost.author=request.user
            newpost.save()
            return redirect('posts:list')
    else:    
      form=forms.Createpost()
    return render(request,'posts/post_new.html',{'form':form})#add form in the return funtion
     