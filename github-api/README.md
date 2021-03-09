# Mocked GitHub API

POC that you can mock a real API architecture by mocking some endpoints of the [GitHub API](https://docs.github.com/en/enterprise-server@2.22/rest/reference).

Just serve the `./api` folder to use it:

```shell
restapify serve ./api
```

## Mocked Endpoints

- `GET    /user/emails` [ref](https://docs.github.com/en/enterprise-server@2.22/rest/reference/users#list-email-addresses-for-the-authenticated-user)
- `POST   /user/emails` [ref](https://docs.github.com/en/enterprise-server@2.22/rest/reference/users#add-an-email-address-for-the-authenticated-user)
- `DELETE /user/emails` [ref](https://docs.github.com/en/enterprise-server@2.22/rest/reference/users#delete-an-email-address-for-the-authenticated-user)
- `GET    /user/followers` [ref](https://docs.github.com/en/enterprise-server@2.22/rest/reference/users#list-email-addresses-for-the-authenticated-user)
- `GET    /users/:username` [ref](https://docs.github.com/en/enterprise-server@2.22/rest/reference/users#get-a-user)
- `GET    /gists/` [ref](https://docs.github.com/en/enterprise-server@2.22/rest/reference/gists#list-gists-for-the-authenticated-user)

