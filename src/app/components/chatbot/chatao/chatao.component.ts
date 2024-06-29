import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/server/chat/chatbot.service';

@Component({
  selector: 'app-chatao',
  templateUrl: './chatao.component.html',
  styleUrls: ['./chatao.component.css']
})
export class ChataoComponent {
  isChatOpen: boolean = false;
  userInput: string = '';
  chatHistory: { role: string; message: string }[] = [];

  constructor(private messageService: ChatbotService) {}

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (!this.isChatOpen) {
      this.adjustHeight('40px');
    }
  }

  handleUserMessage() {
    if (this.userInput.trim() === '') {
      return;
    }

    this.displayUserMessage(this.userInput);

    const response = this.messageService.getResponse(this.userInput);
    this.displayAssistantMessage(response);

    this.userInput = ''; // Reset user input
  }

  displayUserMessage(message: string) {
    this.chatHistory.push({ role: 'user', message: message });
  }

  displayAssistantMessage(message: string) {
    this.chatHistory.push({ role: 'assistant', message: message });
  }

  adjustHeight(height: string) {
    const chatForm = document.querySelector('.chat-form') as HTMLElement;
    chatForm.style.height = height;
  }
  openZalo() {
    // Add your logic to open Zalo here
    console.log('Open Zalo');
  }

  openGmail() {
    // Add your logic to open Gmail here
    console.log('Open Gmail');
  }
}
