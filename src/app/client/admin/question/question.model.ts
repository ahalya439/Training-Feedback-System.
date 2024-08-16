export interface Question {
    id?: number; // Optional if you're generating IDs on the server
    question: string;
    // questionType: string;
    // options?: string[];
    options: string[];
    questionData:any
    text: string;
    type: string; // Define the 'type' property
    // Add other properties as needed
    required: boolean;



  questionType: 'radio' | 'checkbox' | 'text'; // Adjust as needed
  
  }