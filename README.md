
# Skill
Add skill for CHIP payment gateway integration.

### Install a skill

Hosted directly from the GitHub repo (no npm registry required).

```bash
# Latest from the default branch
npx -y github:CHIPAsia/skill

# Pinned to a specific tag (recommended for production)
npx -y github:CHIPAsia/skill#v0.1.0

# Pinned to a specific commit
npx -y github:CHIPAsia/skill#<commit-sha>
```

This runs `bin/install.cjs` straight from the repo tarball, which copies `SKILL.md` into a local `chip-skill/` folder.

### Expected Output 

Once the command is executed, a SKILL.md file will be generated inside chip-skill folder in your root repository.


### Example prompt
```bash
 Create a dummy payment link,
 The expected output is :
 - chip-env file to store CHIP`s Secret Key and Brand ID
 - executable code that will generate a checkout URL.
 - instructions where to get the credentials 
 - command to execute the code
 use chip-skill/SKILL.md as a reference.
```


### What to do next?

Once the code is generated, insert your CHIP credentials into the env file.

You can test the payment link by running the executable code then clicking the checkout URL generated to make a dummy payment. 

Please use a test mode API key to generate dummy payment link.
A dummy payment link would not redirect you to a bank page.

Get your credentials here: 

[Refer here for your brand ID](https://portal.chip-in.asia/collect/developers/api-keys)

[Refer here for your API keys](https://portal.chip-in.asia/collect/developers/api-keys)




### What it does

The SKILL.md contains manual instruction for the agent to integrate CHIP payment gateway into your system.

It also contains instruction to generate checkout URL for user to create dummy payment link so the user can test whether the integration succeed or not.

## Source Document

[CHIP API Documentation](https://docs.chip-in.asia/chip-collect/overview/introduction)

[Downloadable CHIP API markdown files](https://notes.chip-in.asia/share/2im42j9bvl/p/chip-collect-api-Npj8FQkPaY)
