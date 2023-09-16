module.exports = {
    apps: [
      {
        name: 'backend',        // Give your first app a name
        script: 'src/app.js',   // The script you want to run
        watch: true,         // Enable watch mode
        ignore_watch: ['node_modules', 'logs'],  // Folders to ignore in watch mode
        watch_options: {
          followSymlinks: false,
        },
      },
      {
        name: 'frontend',        // Give your second app a name
        script: '../fe/dist_dev/main.js',   // The script for the second app
        autorestart: false,
        ignore_watch: ['node_modules', 'logs'],
        watch:true ,
        watch_options: {
            followSymlinks: false,
          }, // Disable automatic restart
      },
    ],
  };
  