## Description

A code example demonstrating a dynamic module load.
Users will pass the name of the module to be loaded via a path param.

## Usage

### Step 1: Install Nitric

<details>
 <summary>Prerequisites</summary>

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/)
- [Pulumi](https://www.pulumi.com/docs/reference/cli/)

</details>

<details>
 <summary>MacOs</summary>

Install with [homebrew](https://brew.sh/)

```bash
brew install nitrictech/tap/nitric
```

</details>

<details>
 <summary>Windows</summary>

Install with [scoop](https://scoop.sh/)

```
scoop bucket add nitric https://github.com/nitrictech/scoop-bucket.git
scoop install nitric
```

</details>

<details>
 <summary>Linux</summary>
 
Download as a scripted install via curl.

```bash
curl https://nitric.io/install | sh

```

 </details>

### Step 2: To run locally, run the following commands

```bash
yarn install
nitric run
```

Here are some examples of how to consume the API.

```bash
curl http://localhost:9001/apis/main/hello/cat

curl http://localhost:9001/apis/main/hello/donkey
```

## What's next?

Explore the [Nitric framework](https://nitric.io/docs) to learn how to deploy to the cloud and much more.
