const sharedHistory = [];

export const addMessage = (role, content) => {
  sharedHistory.push({
    role,
    content,
    createdAt: new Date().toISOString(),
  });
};

export const getHistory = () => sharedHistory;
