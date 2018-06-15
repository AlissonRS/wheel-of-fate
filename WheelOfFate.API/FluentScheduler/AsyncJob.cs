using FluentScheduler;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace WheelOfFate.API.FluentScheduler
{
    public abstract class AsyncJob : IJob
    {
        private readonly IServiceProvider applicationServices;

        public AsyncJob(IServiceProvider applicationServices)
        {
            this.applicationServices = applicationServices;
        }

        public void Execute()
        {
            var scopeFactory = applicationServices.GetRequiredService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                Task.Run(async () => await ExecuteAsync(scope)).GetAwaiter().GetResult();
            }
        }

        protected abstract Task ExecuteAsync(IServiceScope scope);

    }
}
