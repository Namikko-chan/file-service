package database

import (
	logger "log"

	_ "github.com/joho/godotenv/autoload"

)

func SyncDB() {
	logger.Print("[Database] Synchronization started")
	db := ConnectDB()
	db.Exec(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
	err := db.AutoMigrate()
	if err == nil {
		logger.Print("[Database] Synchronization completed")
	} else {
		logger.Panic("[Database] Synchronization error", err)
		panic("Synchronization error")
	}
}