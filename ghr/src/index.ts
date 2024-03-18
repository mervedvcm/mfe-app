import('./bootstrap').then(
    ({ mount }) => {
      const localRoot = document.getElementById('ghr-dev');
  
      mount({
        mountPoint: localRoot!,
        routingStrategy: 'browser',
      });
    }
  );
  
  export {};