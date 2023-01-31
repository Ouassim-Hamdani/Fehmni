FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR ./Backend
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
EXPOSE 8000