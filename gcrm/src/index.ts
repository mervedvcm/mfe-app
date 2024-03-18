import('./bootstrap').then(
    ({ mount }) => {
      const localRoot = document.getElementById('gcrm-dev');
  
      mount({
        mountPoint: localRoot!,
        routingStrategy: 'browser',
      });
    }
  );
  
  export {};