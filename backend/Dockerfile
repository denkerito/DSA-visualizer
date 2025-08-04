FROM python:3.12-slim

WORKDIR /app

# Copia i file di configurazione Poetry
COPY pyproject.toml poetry.lock README.md ./

# Installa Poetry e le dipendenze
RUN pip install poetry && \
    poetry config virtualenvs.create false && \
    poetry install --no-root --no-interaction --no-ansi

# Copia tutto il codice sorgente sarebbe COPY <source> <destination> 
# quindi primo punto: rappresenta backend , secondo rappresenta /app nel container
COPY . .

WORKDIR /app

# Comando di default per avviare l'app
CMD ["poetry", "run", "uvicorn", "core.main:app", "--host", "0.0.0.0", "--reload"]