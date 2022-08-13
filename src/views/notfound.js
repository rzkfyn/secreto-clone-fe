const notFound = (message = 'Not Found') => {
  return `<div style="font-family: 'Nunito', sans-serif;">
            <figure style="margin: 50px 0 0 0; text-align: center;">
              <img src="/public/imgs/png/justyui.png" alt="404" width="300px">
              <figcaption>
                <h1>404 | ${message}</h1>
              </figcaption>
            </figure>
            <p style="text-align: center;"><a style="text-decoration: none; color: light-blue !important;" href="/">Back to the main page</a></p>
          </div>`;
}

export default notFound;
