FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 54942
EXPOSE 44317

FROM microsoft/dotnet:2.1-sdk-nanoserver-1709 AS build
WORKDIR /src
COPY WheelOfFate.API/WheelOfFate.API.csproj WheelOfFate.API/
COPY WheelOfFate.Data/WheelOfFate.Data.csproj WheelOfFate.Data/
COPY WheelOfFate.Domain/WheelOfFate.Domain.csproj WheelOfFate.Domain/
COPY WheelOfFate.Messaging/WheelOfFate.Messaging.csproj WheelOfFate.Messaging/
RUN dotnet restore WheelOfFate.API/WheelOfFate.API.csproj
COPY . .
WORKDIR /src/WheelOfFate.API
RUN dotnet build WheelOfFate.API.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish WheelOfFate.API.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "WheelOfFate.API.dll"]
