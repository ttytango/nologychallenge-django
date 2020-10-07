from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect, get_object_or_404
from django.views import generic
from django.core.exceptions import PermissionDenied

from .models import Post
from .forms import ContactForm


# Create your views here.
def index(request):
    # if request.method == 'GET':
    #     form = ContactForm()
    # else:
    #     form = ContactForm(request.POST)
    #     if form.is_valid():
    #         first_name = form.cleaned_data['first_name']
    #         second_name = form.cleaned_data['second_name']
    #         name = str(f"{first_name} {second_name}")
    #         from_email = form.cleaned_data['from_email']
    #         message = form.cleaned_data['message']
    #         try:
    #             send_mail(name, message, from_email, ['admin@example.com'])
    #         except BadHeaderError:
    #             return HttpResponse('Invalid header found.')
    #         return redirect('success')
    # return render(request, "index.html", )
    return render(request, 'myapp/index.html')


def contactView(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            second_name = form.cleaned_data['second_name']
            name = str(f"{first_name} {second_name}")
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            try:
                send_mail(name, message, email, ['admin@example.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('success')
    return render(request, "email.html", {'form': form})

def successView(request):
    return HttpResponse('Success! Thank you for your message.')

class PostList(generic.ListView):
    queryset = Post.objects.filter(status=1).order_by('-created_on')
    template_name = 'blog/index.html'
    paginate_by = 3

def post_detail(request, slug):
    template_name = 'blog/post_detail.html'
    post = get_object_or_404(Post, slug=slug)
    return render(request, template_name, {'post': post})