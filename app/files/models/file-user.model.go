package models

import (
	"file-service/app/database"
	"file-service/app/storage"

	"github.com/google/uuid"
)

type FileUser struct {
	database.AbstractModel
	UserId uuid.UUID `gorm:"not null;type:uuid"`
	FileId uuid.UUID `gorm:"not null;type:uuid"`
	Name   string    `gorm:"type:varchar(255);not null"`
	Public bool      `gorm:"default:false;not null"`
	File   *storage.File
}
