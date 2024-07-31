from RealHomes.app import db, app

def import_sql_file(filepath):
    with open(filepath, 'r') as file:
        sql_commands = file.read().split(';')
        for command in sql_commands:
            if command.strip():
                db.engine.execute(command)

if __name__ == '__main__':
    with app.app_context():
        # Import the SQL files
        import_sql_file('SQL1.sql')
        import_sql_file('SQLUserTable.sql')
        print("SQL files imported successfully.")