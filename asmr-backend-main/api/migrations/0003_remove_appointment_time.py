# Generated by Django 4.1.7 on 2023-04-02 18:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_appointment_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='time',
        ),
    ]
