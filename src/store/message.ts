import { defineStore } from "pinia";

import type {MessageType} from "@/feedback/message"

type MessageItem = {
  type: MessageType,
  text: string
}

const useMessageStore = defineStore("message", {
  state: () => {
    return {
      messages: [] as MessageItem[]
    }
  },

  actions: {
    addMessage(type: MessageType, text: string) {
      let message = {
        type,
        text
      }

      this.messages.push(message)
      let length = this.messages.length
      if (length > 0) {
        setTimeout(() => {
          this.messages.splice(0, 1)
        }, 3000)
      }
    },

    success(text: string) {
      this.addMessage("success", text)
    },

    warn(text: string) {
      this.addMessage("warn", text)
    },

    error(text: string) {
      this.addMessage("error", text)
    },

    info(text: string) {
      this.addMessage("info", text)
    }
  }
})

export default useMessageStore