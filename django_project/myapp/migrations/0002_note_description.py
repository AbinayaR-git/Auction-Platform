# Generated by Django 5.1.5 on 2025-04-02 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='description',
            field=models.CharField(default=True, max_length=300),
        ),
    ]
