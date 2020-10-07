---
layout: post
title: "Remove key files history in git"
categories: devlog
tags: git
comments: true
---

> 요약

```shell
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch path_to_file" HEAD

git push --force
```


# 원격 저장소에 보관되면 안 되는 Key 파일의 흔적을 git에서 삭제하기

git에서는 다른 사람과 공유하면 안 되는 파일(`google-services.json`, `API key` 등)을 노출되지 않게 하기 위해 `.gitignore`라는 파일을 사용할 수 있다.
`.gitignore`에 등록된 파일은 파일이 수정되어도 tracking 하지 않아 git에 기록되지 않는다.

하지만 `.gitignore`에 등록하지 않고 이미 원격 저장소에 저장된 파일의 경우 뒤늦게 파일을 등록하거나 삭제해도 git history에는 그대로 남아 있어 history를 확인해보면 중요한 정보가 담겨 있는 파일의 정보를 확인할 수 있다.

이런 경우를 대비해서 git에서는 `filter-branch` 라는 기능을 만들어 두었다.

```shell
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch path_to_file" HEAD
```

> 위와 같은 명령어를 사용하면, history에 쌓여 있는 모든 commit을 방문하면서 `path_to_file`을 삭제한다. 나 같은 경우에는 firebase messaging에 사용한 `./android/app/google-services.json`을 삭제했다. [출처](https://myopswork.com/how-remove-files-completely-from-git-repository-history-47ed3e0c4c35)

나의 경우에는 약 260개의 commit이 있어 3분 정도 시간이 걸렸으나, 혹자는 90k commit을 수정하는 데 무려 10시간이 걸렸다고 한다.

자, 이제 해당 파일의 흔적이 말소된 history들로 rewrite 되었다. 이제 이 history들로 원격 저장소에 push 해야 한다.

## git push에 실패했다.

바로 git push를 이용해서 원격 저장소에 저장하고자 한다면, push가 reject 될 것이다. git pull을 통해서 업데이트해야 하는데, 아마 현재 history와 원격 저장소에 history가 달라졌기 때문에 sync를 맞추라고 하는 것 같다.

나는 무의식적으로 시키는 대로 git pull하고, git push를 했더니 잘 push가 되었다.

결과를 확인하고자 원격 저장소에 접속했는데, commit마다 원본과 rewrite된 commit 각각 하나씩 저장되어 `기존 commit X 2`개 만큼의 commit이 쌓여 있었다!

## 어떡하지

역시 언제나 그렇듯 이런 경험을 나만 한 것은 아니었다. `git filter-branch`를 undo 하고 싶은 사람의 [질문](https://stackoverflow.com/questions/14542326/undo-git-filter-branch)에, 이런 답변이 있었다.

![undo-git-filter-branch](https://raw.githubusercontent.com/solidw/solidw.github.io/master/_posts/images/undo-git-filter-branch.JPG)

내가 `git filter-branch` 명령어를 사용할 때 git은 알아서 rewrite 전의 히스토리들로 backup을 만들어 보관한다. (이때, filter-branch의 backup은 하나만 존재하는 것 같다. 만약 이미 있다면 -f 옵션을 넣어주자.)

만일 이 backup이 정말 존재하는지 확인하고 싶다면,
```shell
git reflog
```
를 입력하면 볼 수 있다.

```shell
git reset --hard refs/original/refs/heads/master
```
를 입력하게 되면 rewrite 직전 시점으로 reset 된다.

이제 원래의 목표였던 key file을 지우기 위해 `git filter-branch`를 다시 한번 실행한다.

```shell
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch path_to_file" HEAD
```

그리고
```shell
git push --force
```
언제나 사용에 주의해야 하는 `--force` 명령어를 사용하면, 원하는 파일의 흔적을 말소하여 git에 저장할 수 있게 된다!

## 결론
git을 사용할 때마다 느끼지만, 꼬일 때마다 식은땀이 난다.