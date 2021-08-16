from django import forms

CHOICES=[('malaria','Malaria'),
         ('dengue','Dengue'),
         ('leishmaniasis', 'Leishmaniasis')]

class DiseaseForm(forms.Form):
    city = forms.CharField(label='Search', widget=forms.TextInput)
    disease = forms.ChoiceField(choices=CHOICES, widget=forms.RadioSelect)
    temperature = forms.BooleanField(label="Temperature", required=False)
    rainfall = forms.BooleanField(label='Rainfall', required=False)
    humidity = forms.BooleanField(label='Humidity', required=False)
    precipitation = forms.BooleanField(label='Precipitation', required=False)
  

