# creating an new post forms to visible in the web
from django import forms
from . import models

# importing the models to this file to use the feilds in the model
class Createpost(forms.ModelForm):
    # create an nested class Meta the name cant be changed
    class Meta:
        model=models.Post
        fields=['title','body','slug','banner']
