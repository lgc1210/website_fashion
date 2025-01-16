from django.http import JsonResponse

def create(request):
    data = {
        "message": "Hello from Django!",
        "status": "success",
    }
    return JsonResponse(data)

def update(request):
    data = {
        "message": "Hello from Django!",
        "status": "success",
    }
    return JsonResponse(data)

def deleteOne(request):
    data = {
        "message": "Hello from Django!",
        "status": "success",
    }
    return JsonResponse(data)

def deleteMany(request):
    data = {
        "message": "Hello from Django!",
        "status": "success",
    }
    return JsonResponse(data)

