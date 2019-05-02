# Netlify Website
A starter website template with netlify.

---------------

# Getting started

Create an [Netlify](https://www.netlify.com) account and then create your project folder.
Use the command below to clone this repository and to remove the '.git' remote repository folder that comes with it.
```
git clone https://github.com/gabepereira/netlify-starter .
rm -rf .git
```

After the installation of the repository, run the commands:
```
git init
git add .
```
To create a new repository and add the files you've just installed.
After doing that, you can create a new repository in your github page, connect to the local repository, commit the changes and push your website template.

Now that the repository set up, run the commands:
```
npm install netlify -g
netlify init
```
It will install the Netlify CLI in your global node_modules (if you don't have it already), and it will guide you through the configuration of the website.
Choose the git repository that you created and give a name to the website (optional).

Now your website is live and Netlify will provide a domain which you can change later by adding a custom domain or just changing its name.

The basic structure of the website is set up and the files are linked in index.html. Also Netlify provides automatic redirects to 404.html when user access dead links.

-----

## Authors

* **Gabriel Pereira** - [gabepereira](https://github.com/gabepereira)
