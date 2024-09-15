module.exports = {
    app: [
        {
            name: 'todo-aws',
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: 'development',
                ENV_VAR1: "environment variable"
            }
        }
    ]
}