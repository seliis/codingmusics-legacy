path = "/mnt/d/cms"

win:
	@if [-d $(path)]; then \
		echo "Removing Legacies"; \
		rm -rf $(path); \
	fi

	@npm run build
	@cp -r ./build $(path)/app/
	@GOOS=windows GOARCH=amd64 go build -o $(path)/appStart.exe ./main.go