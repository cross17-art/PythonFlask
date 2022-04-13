import csv,sqlite3,os
from msilib.schema import Error

class TrDataBase:

    def __init__(self,namedb):
        self.namedb = namedb
        self.currentDirectory=os.path.dirname(os.path.abspath(__file__))


    def createTable(self):
        try:
            self.connectTr()
            # self.deleteAllRecors()
            self.cur.execute('''CREATE TABLE IF NOT EXISTS traders(
            trade_id INT PRIMARY KEY NOT NULL,
            client TEXT NOT NULL,
            instrument TEXT NOT NULL,
            quantity TEXT NOT NULL,
            direction TEXT NOT NULL
            );
            ''')
        except sqlite3.Error as error:
            print("Ошибка при работе с SQLite", error)
        finally:
            if self.conn:
                self.conn.close()

        
        return 1

    def insertData(self):
        try:
            self.connectTr()
            self.deleteAllRecors()
            # trades.csv
            with open(self.currentDirectory+"\csvfile.csv",'r') as fin:
                dr = csv.DictReader(fin) 
                to_db = [(i['trade_id'], i['client'],i['instrument'],i['quantity'],i['direction']) for i in dr]
            self.cur.executemany("INSERT INTO traders (trade_id,client,instrument,quantity,direction) VALUES (?, ?, ?, ?, ?);", to_db)
            self.conn.commit()
        except sqlite3.Error as error:
            print("Ошибка при работе с SQLite", error)
        
    def queryTrDB(self):
        try:
            self.connectTr()
            cur = self.conn.execute("Select * from traders")
            array = []
            print("queryTrDB")
            for row in cur:
                test ={
                    "trade_id":row[0],
                    "client":row[1],
                    "instrument":row[2],
                    "quantity":row[3],
                    "direction":row[4],
                }
                array.append(test)
            return array

        except self.conn.Error as error:
            print("Ошибка при работе с SQLite", error)
            return 2412
  
        return 1

    
    def connectTr(self):
        self.conn = sqlite3.connect(self.currentDirectory+'\\trades.db')
        self.cur = self.conn.cursor()
        
    def deleteAllRecors(self):
        try:
            self.connectTr()
            sql_query = """DELETE from traders where trade_id"""
            da = self.cur.execute("""DELETE FROM traders""")
            self.conn.commit()
        except sqlite3.Error as error:
            print("Ошибка при работе с SQLite", error)

    def createCSVFile (self,str):
        try:
            word=""
            row = []
            end=""
            f = open(self.currentDirectory+'\csvfile.csv','w')
            for symbole in range (len(str)):
                if(len(row)==5):
                    end=row[0]+","+row[1]+","+row[2]+","+row[3]+","+row[4]+"\n"
                    row.clear() 
                    word=""
                    f.write(end)
                if(str[symbole]=="\n"):
                    row.append(word)
                    # row.append(str[symbole+2])
                    if(len(str)-symbole == 1):
                        end=row[0]+","+row[1]+","+row[2]+","+row[3]+","+row[4]+"\n"
                        row.clear() 
                        word=""
                        f.write(end)
                    symbole+1
                    continue
                if(str[symbole]!=','):
                    word+=str[symbole]
                else:
                    row.append(word)
                    word=""
        except Error as err:
            print("Ошибка создания файла",err)


tr = TrDataBase("trades")
# tr.createTable()
# tr.deleteAllRecors()
# tr.insertData()







# cur.execute('''CREATE TABLE IF NOT EXISTS traders(
#         trade_id INT PRIMARY KEY NOT NULL,
#          client TEXT NOT NULL,
#          instrument TEXT NOT NULL,
#          quantity TEXT NOT NULL,
#          direction TEXT NOT NULL
#          );
#          ''')

# with open('trades.csv','r') as fin: # `with` statement available in 2.5+
#     # csv.DictReader uses first line in file for column headings by default
#     dr = csv.DictReader(fin) # comma is default delimiter
#     to_db = [(i['trade_id'], i['client'],i['instrument'],i['quantity'],i['direction']) for i in dr]

# cur.executemany("INSERT INTO traders (trade_id,client,instrument,quantity,direction) VALUES (?, ?, ?, ?, ?);", to_db)


