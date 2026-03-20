// src/API/mettermost.ts
import axiosInstance from './axiosInstance';

// 3. 데이터 구조 설계: Mattermost 웹훅 데이터 인터페이스 정의
export interface MattermostEvent {
  id: string;
  text: string;
  username: string;
  channel_name: string;
  timestamp: string; // ISO Date
}

export const getMattermostEvents = async (): Promise<MattermostEvent[]> => {
  try {
    // Replace with your actual Mattermost events API endpoint
    const response = await axiosInstance.get<MattermostEvent[]>('/api/mattermost/events');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Mattermost events:', error);
    throw error;
  }
};
