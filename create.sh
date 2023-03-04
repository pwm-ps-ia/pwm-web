command=${1:?"No hay comando"}
name=${2:?"No hay nombre de fichero"}

function create_component(){
    mkdir -p "static/scss/$1" "$1"

    touch "$1/$2.html" "static/scss/$1/$2.scss"
    echo "@import \"./$2.scss\";" >> "static/scss/$1/index.scss"
}

case $command in
  component)
    create_component "components" $2
  ;;
  page)
    create_component "pages" $2
  ;;
  *)
    echo "No existe el comando"
  ;;
esac