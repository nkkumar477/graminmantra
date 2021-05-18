from django.conf import settings
from django.db import models
from django.core.files import File


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    added_date = models.DateTimeField(auto_now_add=True)
    product_image = models.ImageField(upload_to='productimg')

    def __str__(self):
        return str(self.id)


STATE_CHOICES = (
    ('Bokaro', 'Bokaro'),
    ('Chatra', 'Chatra'),
    ('Deoghar', 'Deoghar'),
    ('Dhanbad', 'Dhanbad'),
    ('Dumka', 'Dumka'),
    ('East Singhbhum', 'East Singhbhum'),
    ('Garhwa', 'Garhwa'),
    ('Giridih', 'Giridih'),
    ('Godda', 'Godda'),
    ('Gumla', 'Gumla'),
    ('Hazaribag', 'Hazaribag'),
    ('Jamtara', 'Jamtara'),
    ('Khunti', 'Khunti'),
    ('Koderma', 'Koderma'),
    ('Latehar', 'Latehar'),
    ('Lohardaga', 'Lohardaga'),
    ('Pakur', 'Pakur'),
    ('Palamu', 'Palamu'),
    ('Ramgarh', 'Ramgarh'),
    ('Ranchi', 'Ranchi'),
    ('Sahibganj', 'Sahibganj'),
    ('Seraikella Kharsawan', 'Seraikella Kharsawan'),
    ('Simdega', 'Simdega'),
    ('West Singhbhum', 'West Singhbhum'),

)

GENDER = (
    ('Male', 'Male')
    ('Female', 'Female')
)


class Farmer(models.Model):
    f.name = models.CharField(max_length=200)
    l.name = models.CharField(max_length=200)
    mobile = models.IntegerField(max_length=100)
    address_first = models.CharField(max_length=200)
    address_last = models.CharField(max_length=200)
    State = models.CharField(max_length=200)
    district = models.CharField(choices=STATE_CHOICES, max_length=100)
    block = models.CharField(choices=BLOCK_CHOICES, max_length=200)
    village = models.CharField(max_length=200)
    pincode = models.IntegerField(max_length=60)
    age = models.ImageField(max_length=20)
    gender = models.CharField(choices=GENDER, max_length=50)
    education = models.CharField(max_length=200)
    password = models.CharField(max_length=32, widget=forms.PasswordInput)
    rpassword = models.CharField(max_length=32, widget=forms.PasswordInput)

    def clean(self):
        cleaned_data = super().clean()
        valpwd = self.cleaned_data['password']
        varlpwd = self.cleaned_data['rpassword']
        if valpwd != valrpwd:
            raise models.ValidationError('Password does not match')

    def __str__(self):
        # return self.user.username
        return str(self.id)


class Consumer(models.Model):
    f.name = models.CharField(max_length=200)
    l.name = models.CharField(max_length=200)
    email = models.EmailField(max_length=254)
    mobile = models.IntegerField(max_length=100)
    address_first = models.CharField(max_length=200)
    address_last = models.CharField(max_length=200)
    State = models.CharField(max_length=200)
    city = models.CharField(choices=STATE_CHOICES, max_length=100)
    pincode = models.IntegerField(max_length=60)

    def __str__(self):
        # return self.user.username
        return str(self.id)


class Company(models.Model):
    c_name = models.CharField(max_length=200)
    r_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=254)
    mobile = models.IntegerField(max_length=100)

    def __str__(self):
        return str(self.id)


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return str(self.id)

        # Below Property will be used by checkout.html page to show total cost in order summary

    @property
    def total_cost(self):
        return self.quantity * self.product.discounted_price


STATUS_CHOICES = (
    ('Accepted', 'Accepted'),
    ('Packed', 'Packed'),
    ('On The Way', 'On The Way'),
    ('Delivered', 'Delivered'),
    ('Cancel', 'Cancel')
)


class OrderPlaced(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    ordered_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='Pending')

    # Below Property will be used by orders.html page to show total cost
    @property
    def total_cost(self):
        return self.quantity * self.product.discounted_price
