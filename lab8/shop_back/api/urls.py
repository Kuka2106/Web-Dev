from django.urls import path
from .views import get_products, get_product_details, get_categories, get_category_details, get_products_by_category

urlpatterns=[
    path('products/', get_products),
    path('products/<int:pk>/', get_product_details),
    path('categories/', get_categories),
    path('categories/<int:pk>/', get_category_details),
    path('categories/<int:pk>/products', get_products_by_category),
]