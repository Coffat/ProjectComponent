# api-express + vite-project

Theo bài **ReactJS.md**: backend Express (cổng 4000) và frontend Vite + React.

## Chạy song song server và client

Từ thư mục `api-express`:

```bash
npm install
cd vite-project && npm install && cd ..
npm run dev
```

- API: `http://localhost:4000` (ví dụ `GET /api/test`)
- Giao diện: URL hiển thị trong terminal (thường `http://localhost:5173`)

## Chạy riêng

**Chỉ API:**

```bash
npm run server
```

**Chỉ Vite (cần API nếu muốn thấy message từ `/api/test`):**

```bash
npm run client
```
