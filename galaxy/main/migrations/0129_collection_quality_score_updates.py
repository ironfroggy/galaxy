# Generated by Django 2.1.7 on 2019-03-05 16:53

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0128_collection_models'),
    ]

    operations = [
        migrations.AddField(
            model_name='collection',
            name='quality_score_date',
            field=models.DateTimeField(
                null=True,
                verbose_name='DateTime last scored'),
        ),
        migrations.AlterField(
            model_name='collection',
            name='quality_score',
            field=models.FloatField(
                null=True,
                validators=[django.core.validators.MinValueValidator(0.0),
                            django.core.validators.MaxValueValidator(5.0)]),
        ),
    ]
