# Remote Interval

Find remote jobs in your timezone.

## Backstory

It's a huge waste of time to scan through remote job posts and find jobs that are open to your timezone, especially when you're based in East Asia (Taiwan) and looking into US/Europe job markets. There was [Remote Circle](https://www.producthunt.com/posts/remote-circle) solving the exact problem, but sadly after it [became part of](https://twitter.com/remotecircle/status/1259900920512393216) [We Work Remotely](https://weworkremotely.com/), the beloved feature was gone.

Similar feature requests can be seen [here](https://meta.stackoverflow.com/questions/387166/so-remote-jobs-include-preferred-timezones-in-email-alerts) (and [here](https://meta.stackoverflow.com/questions/378822/remote-jobs-and-timezone-search)) as well.

## How It Works

A browser extension (currently only support Firefox) that adds a timezone filter widget to supported job boards, utilizing the structured or unstructured timezone requirements provided in the job descriptions.

## Supported Job Boards

- [Stack Overflow](https://stackoverflow.com/jobs) (WIP)
- [AngelList](https://angel.co/jobs) (TBD)

## Development

### Setup

Install [web-ext](https://github.com/mozilla/web-ext).

```shell
npm install --global web-ext
```

### Run

```shell
web-ext run
```

### Lint

```shell
web-ext lint
```

## Credit

[Icon](icons/timezone.svg) made by [Freepik](https://www.flaticon.com/authors/freepik) from [flaticon](https://www.flaticon.com/).
