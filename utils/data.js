const userData = [
    {
      userName: 'user1',
      email: 'user1@example.com',
    },
    {
      userName: 'user2',
      email: 'user2@example.com',
    },
    
  ];
  
  const thoughtData = [
    {
      thoughtText: 'This is a sample thought 1',
      userName: 'user1',
      reactions: [
        { reactionBody: 'Nice thought!', userName: 'user2' },
        
      ],
    },
    {
      thoughtText: 'This is a sample thought 2',
      userName: 'user2',
      reactions: [
        { reactionBody: 'Great thought!', userName: 'user1' },
        { reactionBody: 'Interesting!', userName: 'user3' }, // Assuming user3 exists
        
      ],
    },
    
  ];
  
  module.exports = { userData, thoughtData };