# Generated by Django 4.1.7 on 2023-04-02 19:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_appointment_date_remove_appointment_time_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='dt',
        ),
        migrations.AddField(
            model_name='appointment',
            name='date',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
