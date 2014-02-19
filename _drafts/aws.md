---
layout: post
author: elliott
categories: how-to
title: Setting up AWS
---

## Sign up

## Configuring Nitrous for easy access

Download .pem file.  Show hidden folders.  Upload into .ssh.
We put it in `.ssh` for cleanness.

Pimp bashrc:

```
export AWS="ubuntu@<your-public-dns.amazonaws.com" 
export AWSKEY="~/.ssh/devsec.pem"
                                                                                                                                                                    
scpaws() {
    scp -i $AWSKEY $1 $AWS
}                                                                                                                                                                   
alias sshaws="ssh -i $AWSKEY $AWS"
echo "AWS commands reminder: sshaws scpaws" 
```

## SSHing into AWS

Open a new console.  Type sshaws.

## Updating Ubuntu

The AWS Ubuntu server doesn't have all the fun stuff we need.

```
# Update apt-get's list of stuff to download
sudo apt-get update

# Install some stuff we need
sudo apt-get install ruby1.9.3 python-pip rubygems git

# Change the default version of Ruby
sudo update-alternatives --install /usr/bin/ruby ruby /usr/bin/ruby1.9.3 400  

# Install github-pages
sudo gem install github-pages

# Install flask
sudo pip install flask
```


## Pimp your AWS prompt

* Uncomment `force_color_prompt=yes`
* change \u@\h to "AWS".  And maybe 01:33 for yellow instead of green
