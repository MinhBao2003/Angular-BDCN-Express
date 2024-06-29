import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }
  getResponse(message: string): string {
    switch (message.toLowerCase()) {
      case 'xin chào':
        return 'Chào bạn!';
      case 'cảm ơn':
        return 'Không có gì, bạn cần thêm sự giúp đỡ gì không?';
      default:
        return 'Xin lỗi, tôi không hiểu câu hỏi của bạn.';
    }
  }
}
